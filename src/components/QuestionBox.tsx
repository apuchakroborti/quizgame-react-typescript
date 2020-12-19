import { IonButton, IonItem, IonLabel, IonList } from '@ionic/react';
import React, { useState } from 'react';

export interface QProps {
    question: string,
    options: string[],
    selected: (text:string)=>{}
}

const QuestionBox = ({ question, options, selected }: QProps) => {
     const [answer, setAnswer] = useState(options);
    
    return (
        <IonList>
            <IonItem>
                <IonLabel>
                <div className ="question"> { question } </div>     
                </IonLabel>
            </IonItem>
            { answer && answer.map(( text, index) =>(
                     <button
                     key={index} 
                     className="answerBtn" 
                     onClick={() => {
                        setAnswer([text]);
                        selected(text); 
                     }}>
                         {text}
                     </button>
                 ) )
             }
        </IonList>
        // <div className="questionBox">
        //     <div className ="question"> { question } </div>
        //     { answer && answer.map(( text, index) =>(
        //             <button key={index} 
        //             className="answerBtn" 
        //             onClick={() => {
        //                setAnswer([text]);
        //                selected(text); 
        //             }}>
        //                 {text}
        //             </button>
        //         ) )
        //     }
        // </div>
    );
};

export default QuestionBox;