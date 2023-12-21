import React from "react"
import { Pagination } from "react-bootstrap"
import ReactPaginate from "react-paginate"

const Page = ({ getPage, pageCount }) => {
    const handlePageClick = (data) => {
        getPage(data.selected + 1)
    }

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            containerClassName={"pagination justify-content-center p-3"}
            activeClassName="active" />
    )
}

export default Page