import React from 'react'
import PageComponents from '../components/PageComponents'
import { useStateContext } from '../contexts/ContextProvider'
import SurveyListItem from '../components/SurveyListItem';

function Surveys() {
  const {surveys} = useStateContext();
  console.log(surveys);

  const onDeleteClick = () => {
    console.log('On Delete Click')
  }
  return (
    <PageComponents title="Surveys">

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
          {surveys.map((survey) =>(
            <SurveyListItem survey={survey} key={survey.id} onDeleteClick={onDeleteClick}/>
          ))}
      </div>
       
   </PageComponents>
  )
}

export default Surveys