import '../styles.css'

function Specific({ isOpen, onClose, children }) {

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="dialogBox rounded-lg p-6 z-50">
                {children}
            </div>
        </div>
    );
}

export default Specific;