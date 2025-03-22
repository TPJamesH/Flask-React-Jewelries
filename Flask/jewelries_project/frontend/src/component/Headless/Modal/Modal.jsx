import { HeadlessModal } from "./HeadlessModal";
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'
function Modal({
    modalContent,
    modalTitle,
    modalClassName,
    modalButtonLabel,
    modalButtonClassName,
    modalPanelClassName,
    modalTitleClassName
}) {

    return (
        <HeadlessModal
            modalTitle={modalTitle}
            modalContent={modalContent}
        >
            {({ show, showModal, hideModal, modalTitle, modalContent }) => (
                <>
                    <button onClick={showModal}
                        className={modalButtonClassName}
                    >{modalButtonLabel}</button>

                    <Dialog open={show} as="div" className={modalClassName} onClose={hideModal}>
                        <DialogBackdrop
                            transition
                            className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                        />
                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4">
                                <DialogPanel
                                    transition
                                    className={modalPanelClassName}>
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <DialogTitle as="h1" className={modalTitleClassName}>
                                                    {modalTitle}
                                                </DialogTitle>
                                                {modalContent}
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </div>
                        </div>
                    </Dialog>
                </>
            )}
        </HeadlessModal>
    );


}



export { Modal };
