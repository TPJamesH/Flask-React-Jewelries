import { InputGroup } from "../Headless/Input/Input";
import useRefNewJewelry from "./hook/useRefNewJewelry";

export default function AddPanel({ reloadFunction }) {
    const { jewelryFormRef, submitJewelry } = useRefNewJewelry()
    return (
        <div>
            <form ref={jewelryFormRef}
                onSubmit={(e) => submitJewelry(e, reloadFunction)}
                className="flex flex-row gap-2"

            >
                <InputGroup
                    name="name"
                    value=""
                    type="text"
                    placeholder="Jewelry's name"
                    classNameInput="mr-2 w-9/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                    classNameLabel="block mb-2 pt-8 text-xl font-medium text-gray-900 "
                />

                <InputGroup
                    name="provider"
                    value=""
                    type="text"
                    placeholder="Jewelry's provider"
                    classNameInput="mr-2 w-9/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                    classNameLabel="block mb-2 pt-8 text-xl font-medium text-gray-900 "
                />

                <InputGroup
                    name="type"
                    value=""
                    type="text"
                    placeholder="Jewelry's type"
                    classNameInput="mr-2 w-9/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                    classNameLabel="block mb-2 pt-8 text-xl font-medium text-gray-900 "
                />

                <InputGroup
                    name="stone"
                    value=""
                    type="number"
                    placeholder="Jewelry's stone weight"
                    classNameInput="mr-2 w-9/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                    classNameLabel="block mb-2 pt-8 text-xl font-medium text-gray-900 "
                />

                <InputGroup
                    name="total"
                    value=""
                    type="number"
                    placeholder="Jewelry's total weight"
                    classNameInput="mr-2 w-9/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                    classNameLabel="block mb-2 pt-8 text-xl font-medium text-gray-900 "
                />

                <InputGroup
                    name="image"
                    value=""
                    type="file"
                    placeholder="Jewelry's image"
                    classNameInput="mr-2 w-9/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                    classNameLabel="block mb-2 pt-8 text-xl font-medium text-gray-900 "
                />

                <button className="text-white text-xl bg-yellow-500 rounded items-center justify-center px-4 w-auto h-12">
                    Add Jewelry
                </button>
            </form>
        </div>
    )
}