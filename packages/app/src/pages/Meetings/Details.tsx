import React from 'react'
import { useParams } from 'react-router-dom'

import { useMeeting } from '@recap/shared'
import Info from '../../components/dashboard/Meeting/Info'
import Summary from '../../components/dashboard/Meeting/Summary'
import Transcript from '../../components/dashboard/Meeting/Transcript'
import Layout from '../../components/layouts'

export default function MeetingDetail() {
  const { mid } = useParams()
  const { meeting, loading, error } = useMeeting(mid!)
  console.debug('======  mid, meeting, loading, error:', mid, meeting, loading, error)

  return (
    <Layout isLoading={loading}>
      {!loading && (
        <>
          {meeting && (
            <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
              <div className="flex sm:flex-row flex-col items-start sm:gap-[80px] gap-[63px]">
                <Info meetingDetails={meeting} />
                <div className="grow">
                  <Summary meetingDetails={meeting} />
                  <Transcript meetingDetails={meeting} />
                </div>
              </div>
            </div>
          )}
          {error && <div className="flex justify-center py-[80px]">Sorry, there is no such meeting.</div>}
        </>
      )}
    </Layout>
  )
}
