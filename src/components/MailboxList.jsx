import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    console.log(props)
    return (
        <>
            <h1>Mailboxes</h1>
            <ul>
                {props.mailboxes.map((mailbox) => (
                    <li key={mailbox._id}>
                        <Link to={`/mailboxes/${mailbox._id}`}>
                            {mailbox.boxholder}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MailboxList;