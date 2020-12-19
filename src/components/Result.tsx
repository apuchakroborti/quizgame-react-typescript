import { IonButton, IonItem, IonItemGroup, IonLabel } from "@ionic/react";
import React from "react";

export interface RProps {
    score: Number,
    playAgain: ()=>{}
}
const Result = ({score, playAgain}: RProps) => {
    return(
        <IonItemGroup>
        <IonItem>
            <IonLabel
            color="secondary" 
            className="ion-text-wrap">
                {score!=-1 ? <>Your score is {score}/5 correct ansers!</>: null}
            </IonLabel>
            <IonButton 
                size="default"
                onClick={playAgain}
            >
                Play Again
            </IonButton>
        </IonItem>
      </IonItemGroup>
        // <div className="score-board">
        //     <div className="score"> Your {score}/5 corrent answers!!</div>
        //     <button className="playBtn" onClick={playAgain}>
        //     Play Again!
        //     </button>
        // </div>    
    )
}

export default Result;