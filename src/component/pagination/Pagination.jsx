"use client";
import styles from "./style.module.css";
// import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  const { currentPage, totalPage } = props;

  return (
    <div className={styles.pagination}>
      <div className={styles.number}>
        <span>1-10</span> of <span>45</span>
      </div>

      <div className={styles.btnPage}>
        <button className={`${styles.prevPage} ${styles.prev}`}> &lt; </button>
        {/* <span id="currentPage" className={`${styles.currentPage}`}>
          1
        </span>
        <span>2</span>
        <span>3</span> */}
        {Array.from({
          length: totalPage, // Create 5 indexes with undefined values
        }).map((item, index) => {
          const isActive = index + 1 == currentPage;

          return <span className={isActive ? "active" : ""}>{index + 1}</span>;
        })}
        <button className={`${styles.nextPage} ${styles.prev}`}> &gt; </button>
      </div>
    </div>
  );
};

export default Pagination;
