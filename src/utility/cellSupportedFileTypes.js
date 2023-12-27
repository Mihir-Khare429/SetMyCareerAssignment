export const imgType = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
    return (
        data.type === "img" ? 
        <div className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
            <img src={data.file} alt="user avatar" />
        </div> :  data.type === "file" ? <div className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
            <input type="file" accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"/>
            <span className='rgt-text-truncate' style={{marginLeft: 10}}>{value}</span>
        </div> : <div className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
            <select>
                {data.values.map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    )
}