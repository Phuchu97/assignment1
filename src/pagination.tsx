function Pagination(data: any) {
    const pages = [];
    for (let i = 1; i <= data.pagesCount; i++) {
      pages.push(
        <li onClick={() => data.onPageChange(i)} key={i} className={i === data.currentPage ? 'active' : ''}>
          <a className={i === data.currentPage ? 'active' : ''} href="#">{i}</a>
        </li>
      );
    }
  
    return (
      <nav>
        <div className="main-pagination">
            <ul className="pagination">
                {pages}
            </ul>
        </div>
      </nav>
    );
}

export default Pagination;