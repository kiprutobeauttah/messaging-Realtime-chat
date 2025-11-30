import Link from "next/link";

export default function Community() {
  return (
    <div className="app-container">
      <h1 className="title">Create Community</h1>
      <p className="tagline">Build your community with Nimbus</p>
      <form className="community-form">
        <div className="form-group">
          <label htmlFor="communityName">Community Name</label>
          <input type="text" id="communityName" name="communityName" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Create Community</button>
      </form>
    {/* // chatting area. */}
    <div className="chat-area">
      <h2 className="chat-title">Community Chat</h2>
      <div className="chat-messages">
        {/* Chat messages will be displayed here */}
      </div>
      <form className="chat-form">
        <input type="text" placeholder="Type your message..." required />
{/* improved ui */}
        <input type="file" id="fileUpload" style={{ display: 'none' }} />
        <label htmlFor="fileUpload" className="btn btn-secondary">Upload File</label>
        <div className="emoji-picker">
          <button type="button" className="btn btn-secondary">😊</button>
        </div>

        <button type="submit" className="btn btn-secondary">Send</button>
      </form>
    </div>


      <Link href="/">
        <button className="btn btn-secondary">Back to Home</button>
      </Link>
    </div>
  );
}
