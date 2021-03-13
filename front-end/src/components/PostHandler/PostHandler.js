import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { Alert } from 'reactstrap';


const PostHandler = props => {
    const calendarStrings = {
        lastDay : '[Yesterday at] LT',
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        lastWeek : '[last] dddd [at] LT',
        nextWeek : 'dddd [at] LT',
        sameElse : 'L'
    };
    return (
        <div>
            <Alert color="success">
                <h4 className="alert-heading">{props.author}</h4>
                 <p>
                    {props.message}
                </p>
                 <hr />
                <p className="mb-0">
                    <Moment calendar={calendarStrings}>
                        {props.date}
                    </Moment>
                 </p>
             </Alert>
        </div>
    );
};

export default PostHandler;