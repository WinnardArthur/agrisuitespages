import React, {Component} from 'react'
import './style.css'
import PublicationHeader from '../../components/PublicationHeader/Publicationheader'
import FormattingBar from '../../components/FormattingBar/formattingbar'
import PublicationBody from '../../components/PublicationBody/publicationBody'
import PublicationOption from '../../components/PublicationsOptions/publicationOption'
import PublicationSettings from '../../components/PublicationSetting/publicationsetting'



class CreatePublication extends Component{
  render(){
    return(
      <div className="createPublication">
          <PublicationHeader/>
          <div className="body">
              <div className="column-1">
                  <FormattingBar/>
                  <PublicationBody/>
                  <PublicationOption/>
              </div>
              <div className="column-2">
                <PublicationSettings/>
              </div>
          </div>
      </div>
     )
  }
}

export default CreatePublication