import { Delete, Edit, RemoveRedEye } from "@mui/icons-material"
import { Box, IconButton, Tooltip } from "@mui/material"
import MaterialReactTable from "material-react-table"

type TableProps = {
    data: any[]
    columns: any[]
}
export const Table = ({ data, columns }: TableProps) => {
    return (
        <MaterialReactTable
            // localization={MRT_Localization_ES}
            enableFullScreenToggle={false}
            enableMultiSort={false}
            enableDensityToggle={false}
            enableColumnResizing={false}
            enableColumnActions={false}
            enableColumnFilters={false}
            enableHiding={false}
            enableEditing={true}
            // enableEditing={enableEditing}
            positionActionsColumn="last"
            columns={columns}
            data={data}
            renderRowActions={({ row }) => {
                return (
                    <Box>
                        {true && (
                            <Tooltip title="Editar">
                                <IconButton
                                    color="primary"
                                    size="small"
                                    onClick={() => { }}
                                >
                                    <Edit />
                                </IconButton>
                            </Tooltip>
                        )}
                        {true && (
                            <Tooltip title="Eliminar">
                                <IconButton
                                    color="primary"
                                    size="small"
                                    onClick={() => { }}
                                >
                                    <Delete />
                                </IconButton>
                            </Tooltip>
                        )}

                    </Box>
                )
            }}
        />
    )
}
