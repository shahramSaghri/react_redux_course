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
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    avatar={faker.image.avatar()}
                    content="Nice Blog post!" 
                />
           </ApprovalCard>
           <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:00AM" 
                avatar={faker.image.avatar()}
                content="where are you?" 
            />
           <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 5:00PM" 
                avatar={faker.image.avatar()}
                content="Have fun!!!" 
            />             
            
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));