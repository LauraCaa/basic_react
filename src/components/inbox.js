import "@/assets/inbox.css";
import Data from "@/utils/inbox.json";
export default function Index() {
    return(
        <div className="main-container">
            <div className="inboxes-container">
                <h1>Inbox</h1>
                {Data.messages.map((message, index) => (
                <div key={index} className="inbox-container">
                    <div className="d-flex space-between absolute-position">
                        <h4><span></span>{message.name}</h4>
                        <p className="hour">{message.createdAt}</p>
                    </div>
                    <p>{message.company}</p>
                    <p className="subject">{message.message}</p>
                </div>
                ))}
            </div>
            <div className="mail-container">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </button>
                <h1>Proposal for <br></br>New Project</h1>
                <div className="mail">
                    <div className="d-flex">
                        <h4>Sarah Johnson</h4>
                        <p className="hour padding-left">Received 9.15 am</p>
                    </div>
                    <p className="subject">Hi there, Please find attached the proposal for our upcoming UX project. The document includes an overview of the project scope, objectives, and deliverables.
                    I`ve also outlined the key milestones and the resources we will need. I`d love to hear your thoughts and feedback on the proposal. Let`s schedule a meeting to discuss it in detail. Also below you`ll find some recent work samples.</p>
                </div>
            </div>
        </div>
    )
};