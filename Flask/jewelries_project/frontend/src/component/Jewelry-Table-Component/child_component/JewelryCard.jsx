import HeadlessCard from "../../Headless/Card/HeadlessCard";

export default function JewelryCard({ index, item }) {
    return (
        <HeadlessCard
            key= {item.token}
            styleClass={"max-w-sm rounded overflow-hidden shadow-lg"}
            bodyClass={"px-6 py-4"}
            header={<img src={item.picture}/>}
            body={
                <>
                    <div className="font-bold text-xl mb-2">{item.name}
                        <p className="text-gray-700 text-base"><b>Provider: </b>{item.provider}</p>
                        <p className="text-gray-700 text-base"><b>Gold Weight: </b>{item.goldWeight}</p>
                        <p className="text-gray-700 text-base"><b>Type: </b>{item.type}</p>
                    </div>
                </>
            }
        />
    )
}
