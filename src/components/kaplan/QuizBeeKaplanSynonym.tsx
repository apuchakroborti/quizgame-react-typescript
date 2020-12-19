import React, {Component} from 'react';
import '../../assets/style.css';
import kaplanGreSynonymQuizService from "../../quizService/kaplan_synonym";
import QuestionBox from "../QuestionBox";
import Result from "../Result";
import { IonButton, IonContent, IonFooter, IonHeader, IonItem, IonList, IonPage, IonToolbar } from '@ionic/react';
import DescriptionList from '../DescriptionList';
import history from '../../helper/history';
import SynonymBox from './SynonymBox';
class QuizBeeKaplanSynonym extends Component {
    state = {
        synonymBank: [],
        score: 0,
        responses: 0,
    };

    getQuestion = () => {
        kaplanGreSynonymQuizService().then(question => {
            this.setState({
                synonymBank: question
            });
        });
    };
    playAgain = () => {
        this.getQuestion();
        this.setState({
            score: 0,
            responses: 0
        })
        return 1;
    }
    computeAnswer = (answer:string, correctAnswer:string) => {
        if( answer === correctAnswer ) {
            this.setState({
                score: this.state.score+1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses+1 : 5
        });
        return answer;
    }
    home = () =>{
        history.push('/');
    }
    componentDidMount() {
        this.getQuestion();
    }
    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButton
                        color="none"
                        onClick={e=>this.home()}
                        className="title"
                        >
                        QuizBee            
                        </IonButton>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
               { this.state.synonymBank.length > 0 && 
               this.state.responses < 5 &&  
               this.state.synonymBank.map(
                   ({ question, correct, description, synonyms, questionId})=> (
                    
                        <IonItem>
                            <SynonymBox
                                question = {question}
                                correct={correct}
                                description={description}
                                synonymsList={synonyms}
                                key={questionId}
                            />
                        </IonItem>
                    
                )
                )}
                
                </IonList>
            </IonContent>
            <IonFooter>
                    <Result 
                            score={-1}  
                            playAgain = {this.playAgain}
                    />
            </IonFooter>
            </IonPage>
        )
    }
}

export default QuizBeeKaplanSynonym;