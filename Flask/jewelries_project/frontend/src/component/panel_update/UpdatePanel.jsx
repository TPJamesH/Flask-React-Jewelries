import { InputGroup } from "../Headless/Input/Input";
import useRefUpdateJewelry from "./hook/useUpdateJewelry";
import { Modal } from "../Headless/Modal/Modal";
import { useState } from "react";
import ModalStyle from "../template/Modal";
import Dropdown from "../Headless/Dropdown/Dropdown";
export default function AddPanel({item,reloadFunction,setFunction}) {
    const {
        defaultButtonClass,
        defaultModalClass,
        defaultPanelClass,
        defaultTitleClass } = ModalStyle()
    
    const [type,setType] = useState(item.type)

    const { jewelryFormRef, submitJewelry } = useRefUpdateJewelry()
    return (
        <>
            <Modal
                modalTitle="Update jewelry"
                modalButtonLabel="Update"
                modalButtonClassName={defaultButtonClass}
                modalClassName={defaultModalClass}
                modalPanelClassName={defaultPanelClass}
                modalTitleClassName={defaultTitleClass}
                modalContent={
                    <form ref={jewelryFormRef}
                        onSubmit={(e) => submitJewelry(e, reloadFunction)}
                        className="mx-auto"
                    >
                        <div class="mb-6">
                            <InputGroup
                                name="name"
                                value={item.name}
                                type="text"
                                placeholder="Jewelry's name"
                                classNameInput="mr-2 w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                                classNameLabel="block mb-2 pt-2 text-xl font-medium text-gray-900 "
                            />
                        </div>
                        <div class="mb-6">
                            <InputGroup
                                name="provider"
                                type="text"
                                value={item.provider}
                                placeholder="Jewelry's provider"
                                classNameInput="mr-2 w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                                classNameLabel="block mb-2 pt-2 text-xl font-medium text-gray-900 "
                            />
                        </div>
                        <div class="mb-6">
                           <Dropdown
                                name="type"
                                options={[
                                    {label:type,value:type},
                                    {label:"Ring", value: "Ring"},
                                    {label:"Neck Bangle", value: "Neck Bangle"},
                                    {label:"Bracelet", value: "Bracelet"},
                                    {label:"Pendant", value: "Pendant"},
                                    {label:"Bangle", value: "Bangle"},
                                    {label:"Semaine", value: "Semaine"},
                                    {label:"Necklace", value: "Necklace"},
                                ]}
                                handleFunction={setType}
                                container={"size-30 text-gray-900 w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "}
                           />
                        </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-2" >
                            <InputGroup
                                name="stone"
                                value={item.stoneWeight}
                                type="number"
                                placeholder="Jewelry's stone weight"
                                classNameInput="mr-2 w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                                classNameLabel="block mb-2 pt-2 text-xl font-medium text-gray-900 "
                            />

                            <InputGroup
                                name="total"
                                type="number"
                                value={item.totalWeight}
                                placeholder="Jewelry's total weight"
                                classNameInput="mr-2 w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                                classNameLabel="block mb-2 pt-2 text-xl font-medium text-gray-900 "
                            />
                        </div>
                        <div class="mb-6">
                            <InputGroup
                                name="image"
                                type="file"
                                value={item.picture}
                                placeholder="Jewelry's image"
                                classNameInput="mr-2 w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                                classNameLabel="block mb-2 pt-2 text-xl font-medium text-gray-900 "
                            />
                            
                        </div>
                       
                        <button className="md:translate-x-full lg:translate-x-full	text-white text-xl bg-green-800 rounded justify-center px-4 w-auto h-12">
                            Update Jewelry
                        </button>
                    </form>} />
                    
                    



        </>
    )
}