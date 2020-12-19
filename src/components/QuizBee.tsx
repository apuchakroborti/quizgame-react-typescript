import React, {Component} from 'react';
import '../assets/style.css';
import quizService from "../quizService/index";
import greQuizService from "../quizService/magoosh_1000_service";
import QuestionBox from "./QuestionBox";
import Result from "./Result";
import { IonButton, IonContent, IonFooter, IonHeader, IonItem, IonList, IonPage, IonToolbar } from '@ionic/react';
import DescriptionList from './DescriptionList';
import history from '../helper/history';
class QuizBee extends Component {
    state = {
        questionBank: [],
        score: 0,
        responses: 0,
        // descriptions: []
    };
    // setDescription = (des: string) => {
    //     let list: string[]=this.state.descriptions.slice();
    //     list.push(des);
    //     this.setState({
    //         descriptions: list
    //     })
    // };

    getQuestion = () => {
        greQuizService().then(question => {
            this.setState({
                questionBank: question
            });
            // if(this.state.questionBank.length > 0 && 
            //     this.state.questionBank.length < 5){
            //         this.state.questionBank.map((description)=>{
            //             this.setDescription(description);
            //             console.log("description gq: "+description);
            //         });
            //     };
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
                    {/* <div className="title">QuizBee</div> */}
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
            {/* <div className="container"> */}
               { this.state.questionBank.length > 0 && 
               this.state.responses < 5 &&  
               this.state.questionBank.map(
                   ({ question, answers, correct, questionId})=> (
                    
                        <IonItem>
                            <QuestionBox 
                                question = {question}
                                options = {answers}
                                key={questionId}
                                selected = { answer => this.computeAnswer(answer, correct) }
                            />
                        </IonItem>
                    
                )
                )}
                {/* </div> */}
                {   this.state.responses === 5 ? (
                        this.state.questionBank.map(
                            ({ question, correct, description })=> (
                                    <DescriptionList
                                        question = {question}
                                        correct = {correct}
                                        description = {description}
                                    />
                            )
                            )
                    ) :null
                }
                
                
                </IonList>
            </IonContent>
            <IonFooter>
                {this.state.responses === 5 ? (
                        <Result 
                            score={this.state.score}  
                            playAgain = {this.playAgain}
                        />
                ): null}
            </IonFooter>
            </IonPage>
        )
    }
}

export default QuizBee;