import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//Create a new compenent named App

const App = () => {
    return  (
        <div className="ui container comments">
           <ApprovalCard>
               <div>
                   <h4>
                       Warning!
                   </h4>
                    Are you sure you want to do this?
               </div>
           </ApprovalCard>

           <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    avatar={faker.image.avatar()}
                    content="Nice Blog post!" 
                />
           </ApprovalCard>

           <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00AM" 
                    avatar={faker.image.avatar()}
                    content="where are you?" 
                />
           </ApprovalCard>
           
           <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    avatar={faker.image.avatar()}
                    content="Have fun!!!" 
                    /> 
           </ApprovalCard>
                       
            
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));