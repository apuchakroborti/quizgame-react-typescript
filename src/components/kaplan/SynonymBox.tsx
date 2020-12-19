import { IonButton, IonItem, IonLabel, IonList } from '@ionic/react';
import React, { useState } from 'react';

export interface QProps {
    question: string,
    correct: string,
    description: string, 
    synonymsList: string[]
}

const SynonymBox = ({ question, correct, description, synonymsList }: QProps) => {
     const [synonyms, setSynonyms] = useState(synonymsList);
    
    return (
        <IonList>
            <IonItem >
                <IonLabel
                color="danger" 
                className="ion-text-wrap">
                { question }     
                </IonLabel>
            </IonItem>
            <IonItem >
                <IonLabel 
                color="primary"
                className="ion-text-wrap">
                    { correct }      
                </IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel
                color="secondary" 
                className="ion-text-wrap">
                { description }     
                </IonLabel>
            </IonItem>
            
            { synonyms && synonyms.map(( text, index) =>(
                     <IonItem>
                        <IonLabel
                        key={index} 
                        className="ion-text-wrap" 
                        >
                            {text}
                        </IonLabel>
                     </IonItem>
                 ) )
             }
        </IonList>
    );
};

export default SynonymBox;