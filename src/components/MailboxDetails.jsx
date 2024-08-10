import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams()
    const thisMailbox = props.mailboxes.find(mailbox => mailbox._id === Number(mailboxId))
    return (
        <>
            <h1>Mailbox: {thisMailbox._id}</h1>
            <p>Owner: {thisMailbox.boxholder}</p>
            <p>Size: {thisMailbox.boxsize}</p>
        </>
    )
}

export default MailboxDetails;