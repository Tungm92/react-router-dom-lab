import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams()
    const thisMailbox = props.mailboxes.find(mailbox => mailbox._id === Number(mailboxId))
    return (
        <>
            <h1>{thisMailbox.boxholder}</h1>
            <p>{thisMailbox.boxsize}</p>
        </>
    )
}

export default MailboxDetails;