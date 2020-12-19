import { IonItem, IonLabel } from '@ionic/react';
import React, { useState } from 'react';

export interface QProps {
    question: string,
    correct: string,
    description: string
}

const DescriptionList = ({ question, correct, description }: QProps) => {
     
    return (
        <IonItem>
            <IonLabel
            color="primary" 
            className="ion-text-wrap">
                {question}:({correct}) {description}
            </IonLabel>
        </IonItem>

        // <div className="questionBox">
        //     <ol>
        //     {description}
        //     </ol>
            
        // </div>
    );
};

export default DescriptionList;