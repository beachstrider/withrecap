import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { toast, useMeeting } from '@recap/shared'

import Info from '../../components/dashboard/Meeting/Info'
import Processing from '../../components/dashboard/Meeting/Processing'
import Summary from '../../components/dashboard/Meeting/Summary'
import Transcript from '../../components/dashboard/Meeting/Transcript'
import Layout from '../../components/layouts'

export default function MeetingDetail() {
  const { mid } = useParams()
  const { meeting, loading, error } = useMeeting(mid!)
  console.debug('=======  meeting:', meeting)

  useEffect(() => {
    if (error) {
      toast.error(error.message, error.err)
    }
  }, [error])

  return (
    <Layout isLoading={loading}>
      {!loading && (
        <>
          {meeting && (
            <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
              <div className="flex sm:flex-row flex-col items-start sm:gap-[80px] gap-[63px]">
                <Info meetingDetails={meeting} />

                {/* Meeting is being recorded or processed */}
                {(!meeting.ended || !meeting.transcript) && <Processing meeting={meeting} />}

                {/* Meeting has conversations */}
                {meeting.ended && meeting.transcript?.length > 0 && (
                  <div className="grow">
                    <Summary meetingDetails={meeting} />
                    <Transcript meetingDetails={meeting} />
                  </div>
                )}

                {/* Meeting has no conversations */}
                {meeting.ended && !meeting.transcript?.length && (
                  <div className="grow">This meeting doesn't have conversations.</div>
                )}
              </div>
            </div>
          )}
          {error && <div className="flex justify-center py-[80px]">Sorry, there is no such meeting.</div>}
        </>
      )}
    </Layout>
  )
}
