import { InputGroup } from "../Headless/Input/Input";
import useRefUpdateJewelry from "./hook/useUpdateJewelry";
export default function UpdatePanel({ item, reloadFunction, setItems }) {
    let [isOpen, setIsOpen] = useState(false)
    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    const { jewelryFormRef, submitJewelry } = useRefUpdateJewelry()
    return (
        <>
            <button onClick={open} className="inline-flex mr-2 items-center gap-2 rounded-md bg-red-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Edit
            </button>
            <Dialog open={isOpen} onClose={close} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                            Update Jewelry
                                        </DialogTitle>
                                        <div>
                                            <form ref={jewelryFormRef}
                                                onSubmit={(e) => {
                                                    submitJewelry(e, item.token, reloadFunction);
                                                    close();
                                                }}
                                                className="flex flex-row gap-2"

                                            >
                                                <InputGroup
                                                    name="name"
                                                    value={item.name}
                                                    type="text"
                                                    placeholder="Jewelry's name"
                                                    classNameInput="mr-2 w-9/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                                                    classNameLabel="block mb-2 pt-8 text-xl font-medium text-gray-900 "
                                                />

                                                <InputGroup
                                                    name="provider"
                                                    value={item.provider}
                                                    type="text"
                                                    placeholder="Jewelry's provider"
                                                    classNameInput="mr-2 w-9/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                                                    classNameLabel="block mb-2 pt-8 text-xl font-medium text-gray-900 "
                                                />

                                                <InputGroup
                                                    name="type"
                                                    value={item.type}
                                                    type="text"
                                                    placeholder="Jewelry's type"
                                                    classNameInput="mr-2 w-9/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                                                    classNameLabel="block mb-2 pt-8 text-xl font-medium text-gray-900 "
                                                />

                                                <InputGroup
                                                    name="stone"
                                                    value={item.stoneWeight}
                                                    type="number"
                                                    placeholder="Jewelry's stone weight"
                                                    classNameInput="mr-2 w-9/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                                                    classNameLabel="block mb-2 pt-8 text-xl font-medium text-gray-900 "
                                                />

                                                <InputGroup
                                                    name="total"
                                                    value={item.totalWeight}
                                                    type="number"
                                                    placeholder="Jewelry's total weight"
                                                    classNameInput="mr-2 w-9/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                                                    classNameLabel="block mb-2 pt-8 text-xl font-medium text-gray-900 "
                                                />

                                                <InputGroup
                                                    name="image"
                                                    value={item.picture}
                                                    type="file"
                                                    placeholder="Jewelry's image"
                                                    classNameInput="mr-2 w-9/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                                                    classNameLabel="block mb-2 pt-8 text-xl font-medium text-gray-900 "
                                                />

                                                <button className="inline-flex items-center gap-2 rounded-md bg-green-700 py-1.5 px-5 text-md/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700 transform translate-y-6"
                                                >
                                                    Confirm
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}