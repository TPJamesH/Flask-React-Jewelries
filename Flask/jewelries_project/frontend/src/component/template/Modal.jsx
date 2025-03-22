const ModalStyle = () => {
     const defaultButtonClass = "flex-none gap-2 rounded-md bg-yellow-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
    const defaultModalClass = "relative z-10";
    const defaultPanelClass = "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95";
    const defaultTitleClass = "text-center text-3xl font-semibold text-gray-900 pb-2";

    return {
        defaultButtonClass,
        defaultModalClass,
        defaultPanelClass,
        defaultTitleClass
    }
}

export default ModalStyle