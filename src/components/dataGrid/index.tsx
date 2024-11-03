import DataTable from 'react-data-table-component'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx'
import styled from 'styled-components'

interface GridProps {
  columns: any
  height?: string
  headCellBackgroundColor?: string
  headCellColor?: string
  headCellBorder?: string

  data: any

  onSelectRow?: (data: any) => void
}

export const Grid = ({
  columns,
  data,
  height,
  headCellBackgroundColor,
  headCellBorder,

  headCellColor,

  onSelectRow
}: GridProps) => {
  const customStyles = {
    table: {
      style: {
        backgroundColor: '#0000', // define a cor de fundo da tabela
        alignText: 'center'
      }
    },
    rows: {
      style: {
        minHeight: '70px', // define a altura mínima das linhas da tabela
        borderTop: 'solid 5px #f5f5f5 ',
        backgroundColor: '#fff',
        cursor: onSelectRow ? 'pointer' : 'default'
      }
    },
    headCells: {
      style: {
        backgroundColor: headCellBackgroundColor
          ? headCellBackgroundColor
          : '#002951', // define a cor de fundo dos cabeçalhos de coluna
        color: headCellColor ? headCellColor : '#fff',
        fontSize: '16px',
        fontWeight: 'bold',
        alignText: 'center',
        justifyContent: 'center'
      }
    },
    cells: {
      style: {
        alignText: 'center', // define o alinhamento ao centro do texto nas células
        justifyContent: 'center'
      }
    },
    noData: {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
      }
    }
  }
  return (
    <Table height={height}>
      <DataTable
        paginationIconFirstPage={
          <RxDoubleArrowLeft cursor={'pointer'} size={20} color="#6685A2" />
        }
        paginationIconLastPage={
          <RxDoubleArrowRight cursor={'pointer'} size={20} color="#6685A2" />
        }
        paginationIconPrevious={
          <BsArrowLeftSquare cursor={'pointer'} size={20} color="#6685A2" />
        }
        paginationIconNext={
          <BsArrowRightSquare cursor={'pointer'} size={20} color="#6685A2" />
        }
        data={data}
        columns={columns}
        onRowClicked={row => (onSelectRow ? onSelectRow(row) : null)}
        customStyles={customStyles}
        paginationPerPage={5}
        className="tabel"
        noDataComponent={
          <div
            style={{
              color: '#6685A2',
              fontSize: 20,
              fontWeight: 'bold'
            }}
          >
            Não foram encontrados registros
          </div>
        }
        paginationComponentOptions={{
          rowsPerPageText: undefined,
          rangeSeparatorText: 'total',
          noRowsPerPage: true,
          selectAllRowsItem: false
        }}
        pagination={true}
      />
    </Table>
  )
}

const Table = styled.div<{ height?: string }>`
  min-height: ${props => (props.height ? props.height : '70vh')};
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  .headCells {
    background-color: red;
  }
  nav {
    background-color: transparent !important;
  }
`
