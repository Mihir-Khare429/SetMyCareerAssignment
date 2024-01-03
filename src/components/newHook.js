import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
const pollingInterval = 60000; // Interval in milliseconds (e.g., 60000ms = 1 minute)

const DisplayRate = () => {
    const [rateValues, setValues] = useState({});
    const [currSelected, setCurrName] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const newRateValues = response.data.bpi;
                
                // Check if the rates have changed
                if (!isEqual(newRateValues, rateValues)) {
                    setValues(newRateValues);
                }
                
                setLoading(false);
            } catch (error) {
                setError("Error fetching data");
                setLoading(false);
            }
        };

        const isEqual = (obj1, obj2) => {
            return JSON.stringify(obj1) === JSON.stringify(obj2);
        };

        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, pollingInterval);

        return () => clearInterval(interval);
    }, [rateValues]); // eslint-disable-line react-hooks/exhaustive-deps

    const getCurrentValue = (curr, data) => {
        return data[curr] ? data[curr].rate : "";
    };

    const currencies = Object.keys(rateValues);

    return (
        <div className="parent">
            <div>Current Rate</div>
            <select onChange={(event) => setCurrName(event.target.value)}>
                {currencies.map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
            </select>
            {loading ? (
                <h3>Fetching price ... </h3>
            ) : error ? (
                <h3>{error}</h3>
            ) : (
                <h3>
                    {currSelected === ""
                        ? "Please select a currency"
                        : `Currency Selected ${currSelected} and current value is ${getCurrentValue(
                              currSelected,
                              rateValues
                          )}`}
                </h3>
            )}
        </div>
    );
};

export default DisplayRate;
