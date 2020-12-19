import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import QuizBee from './components/QuizBee';
import history from './helper/history';
import QuizBeeKaplan from './components/kaplan/QuizBeeKaplan';
import QuizBeeKaplanSynonym from './components/kaplan/QuizBeeKaplanSynonym';
import QuizBeeWordSmart from './components/word-smart/QuizBeeWordSmart';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter history={history}>
      <IonRouterOutlet>
        <Route path="/magoosh-quiz" component={ QuizBee } exact={true} />
        <Route path="/kaplan-quiz" component={ QuizBeeKaplan } exact={true} />
        <Route path="/kaplan-synonyms" component={QuizBeeKaplanSynonym } exact={true} />
        <Route path="/word-smart" component={QuizBeeWordSmart } exact={true} />
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
