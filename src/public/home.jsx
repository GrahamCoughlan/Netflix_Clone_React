import React from 'react'
import Main from '../components/Main'
import requests from '../Request'
import Row from '../components/row'

const home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming}/>
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID='3' title='Tredning' fetchURL={requests.requestTrending}/>
      <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row rowID='5' title='Horror' fetchURL={requests.requestHorror}/>
    </>
  )
}

export default home
