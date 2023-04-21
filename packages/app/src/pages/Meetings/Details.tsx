import React from 'react'
import { useParams } from 'react-router-dom'

import Info from '../../components/dashboard/Meeting/Info'
import Summary from '../../components/dashboard/Meeting/Summary'
import Transcript from '../../components/dashboard/Meeting/Transcript'
import Layout from '../../components/layouts'

import { useMeetingDetails } from '../../hooks/meetings'

export default function MeetingDetail() {
  const { mid } = useParams()
  const { meetingDetails, loading } = useMeetingDetails(mid!)
  console.debug('=======  meetingDetails:', meetingDetails, loading)

  return (
    <Layout isLoading={loading}>
      {!loading && meetingDetails && (
        <div className="container-sm sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
          <div className="flex sm:flex-row flex-col items-start sm:gap-[80px] gap-[63px]">
            <Info meetingDetails={meetingDetails} />
            <div className="grow">
              <Summary meetingDetails={meetingDetails} />
              <Transcript meetingDetails={meetingDetails} />
            </div>
          </div>
        </div>
      )}
      {!loading && !meetingDetails && (
        <div className="flex justify-center py-[80px]">Sorry, there is no such meeting.</div>
      )}
    </Layout>
  )
}
