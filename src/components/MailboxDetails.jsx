import { useParams, useNavigate } from 'react-router-dom';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams()
    const thisMailbox = props.mailboxes.find(mailbox => mailbox._id === Number(mailboxId))
    return (
        
        thisMailbox ? 
        <>
            <h1>Mailbox: {thisMailbox._id}</h1>
            <h3>Details</h3>
            <p>Boxholder: {thisMailbox.boxholder}</p>
            <p>Box Size: {thisMailbox.boxsize}</p>
        </>
        :
        <h2>Mailbox Not Found!</h2>
    )
}

export default MailboxDetails;