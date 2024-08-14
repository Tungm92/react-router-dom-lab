import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    console.log(props)
    return (
        <>
            <h1>Mailboxes</h1>
            <ul>
                {props.mailboxes.map((mailbox) => (
                    <div className='mail-box' key={mailbox._id}>
                        <Link to={`/mailboxes/${mailbox._id}`}>
                            {mailbox._id}
                        </Link>
                    </div>
                ))}
                <div><Link to={`${props.mailboxes.length+1}`}>{props.mailboxes.length+1}</Link></div>
            </ul>
        </>
    );
};

export default MailboxList;