import React, { useContext} from 'react'
import OperationLog from './OperationLog'
import AppContext from '../contexts/AppContext'


function OperationLogs() {
    const { state } = useContext(AppContext)
    return (
        <div>
            <>
                <h4>操作ログ一覧</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th>内容</th>
                        <th>日時</th>
                        </tr>
                    </thead>
                    <tbody>
                        { state.operationLogs.map((log, index) => (
                        <OperationLog key={index}
                        log={log}
                        />))
                        }
                    </tbody>
                </table>
            </>
        </div>
    )
}

export default OperationLogs
