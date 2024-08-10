import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    return (
        <>
            <h2>Mailboxes</h2>
            <ul>
                {props.mailboxes.map((mailbox) => (
                    <li key={mailbox.name}>
                        <Link to={`/mailboxes/${mailbox._id}`}>
                            {mailbox.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default MailboxList