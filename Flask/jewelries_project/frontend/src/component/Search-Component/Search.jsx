import { useState } from "react";
import { Field, Label } from "@headlessui/react"
import { InputGroup } from "../Headless/Input/Input";
import search from "./api/search";

export default function SearchPanel({ pageNo, pageSize, setFunction }) {
    const [searchVal, setSearchVal] = useState("");

    return (
        <div className="flex flex-row gap-2 justify-center pb-4">
            <Field>
                <Label className="block mb-2 pt-8 text-xl font-medium text-gray-900 ">Search a jewelry product through type, provider, or gold weight</Label>
                <div className="flex lg:translate-x-16 md:translate-x-16 translate-x-8">
                    <div className="flex-auto">
                        <InputGroup
                            name="search_key"
                            value={searchVal}
                            setVal={setSearchVal}
                            classNameInput="mr-2 w-11/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 " placeholder="Enter search term here"
                            type="text"

                        />
                    </div>
                    <div className="flex-auto -translate-x-1/4">
                        <button
                            onClick={() => search(pageNo, pageSize, searchVal, setFunction)}
                            className=" text-white text-xl bg-green-800 rounded-lg items-center justify-center px-4 w-auto h-11">Search
                        </button>
                    </div>
                </div>
            </Field>
        </div>
    )
}