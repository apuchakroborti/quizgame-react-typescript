import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

import history from '../helper/history';

const Home: React.FC = () => {
  const magoosh = ()=>{
    history.push('/magoosh-quiz')
  }
  const kaplan = ()=>{
    history.push('/kaplan-quiz')
  }

  const kaplanSynonym = ()=>{
    history.push('/kaplan-synonyms')
  }

  const wordSmart = ()=>{
    history.push('/word-smart')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton
          color="dark"
          size="large" 
          expand="full"
          >
          Welcome to QuizBee!            
          </IonButton>
        {/* <div className="title">Welcome to QuizBee!</div> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton
          color="secondary"
          expand="block"
          onClick={e=>magoosh()}
        >
          Enter Magoosh Words Quizgame
        </IonButton>
        <IonButton
          color="primary"
          expand="block"
          onClick={e=>kaplan()}
        >
          Enter Kaplan Words Quizgame
        </IonButton>
        <IonButton
          color="secondary"
          expand="block"
          onClick={e=>kaplanSynonym()}
        >
          Enter Kaplan Synonyms
        </IonButton>

        <IonButton
          color="primary"
          expand="block"
          onClick={e=>wordSmart()}
        >
          Enter Word Smart Quizgame
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
