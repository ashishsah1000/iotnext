import React, { useState } from "react";
import { Equipment } from "@/inteface/types";
import { StatusOnlineIcon } from "@heroicons/react/outline";

const EquipmentCard = ({ equipment }: any) => {
  const [showKeys, setShowKeys] = useState(false);

  const toggleShowKeys = () => {
    setShowKeys(!showKeys);
  };

  const formattedDate = new Date(equipment.dateCreated).toLocaleString();

  return (
    <div className="bg-white rounded-lg p-4 flex gap-2 flex-wrap justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold uppercase flex">{equipment.name}</h2>
        <p className="text-gray-600 text-sm">{formattedDate}</p>
        <p className="mt-2">{equipment.description}</p>
      </div>

      <div className="mt-4">
        <button
          className="text-blue-500 hover:underline focus:outline-none"
          onClick={toggleShowKeys}
        >
          {showKeys ? "Hide Keys" : "Show Keys"}
        </button>

        {showKeys && (
          <div className="mt-2 flex flex-wrap gap-2">
            <div className="mb-2">
              <label className="font-semibold">Public Key:</label>
              <input
                type="text"
                value={equipment.publicKey}
                readOnly
                className="bg-gray-100 border border-gray-300 rounded-md px-2 py-1 w-full"
              />
            </div>

            <div>
              <label className="font-semibold">Private Key:</label>
              <input
                type="password"
                value={equipment.privateKey}
                readOnly
                className="bg-gray-100 border border-gray-300 rounded-md px-2 py-1 w-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EquipmentCard;
