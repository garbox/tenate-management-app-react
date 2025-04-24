import LoadingData from "../../../../utilities/loading_data";

function StatusSelection({data, maintStatusData, isLoading}){

    if (isLoading || !maintStatusData || maintStatusData.length === 0) {
        return (
          <LoadingData
            title=""
            data={maintStatusData}
            isLoading={isLoading}
            col={6}
          />
        );
      }
    

    return (
        <form>
            <select className="form-control" defaultValue={data?.status?.id}>
                {maintStatusData.map((maintStatus) =>
                    <option key={maintStatus.id} value={maintStatus.id}>
                        {maintStatus.name}
                    </option>
                )}
            </select>
        </form>
    );
}
export default StatusSelection;