import CoreValueAnimation from './CoreValueAnimation'

const AboutCoreValue = () => {
  return (
    <section className=" relative overflow-hidden pb-150  max-md:pb-25 ">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <CoreValueAnimation />
          <div>
            <p className="section-tagline">GUIDING PRINCIPLES</p>
            <h2 className=" mb-8 max-md:mb-4">The philosophy that underpins our organization.</h2>
            <p className="mb-11  max-md:mb-6">
              Our principles are the cornerstones of delivering exceptional customer experiences, ensuring success
              through transparency, honesty, and a commitment to results.
            </p>
            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-md:[&>*:not(:last-child)]:mb-4">
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon  item-center relative flex justify-center gap-6 rounded-full bg-white dark:bg-dark-200">
                  <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 29.0664C22.732 29.0664 29 22.7984 29 15.0664C29 7.33442 22.732 1.06641 15 1.06641C7.26801 1.06641 1 7.33442 1 15.0664C1 22.7984 7.26801 29.0664 15 29.0664Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M15 0.0664062C6.75 0.0664062 0 6.81641 0 15.0664C0 23.3164 6.75 30.0664 15 30.0664C23.25 30.0664 30 23.3164 30 15.0664C30 6.81641 23.25 0.0664062 15 0.0664062ZM16.125 1.31641C20.5 1.69141 24.25 4.06641 26.5 7.56641H12.375L16.125 1.31641ZM18.375 8.81641L22.125 15.0664L18.375 21.3164H11.5L7.875 14.8164L11.625 8.81641H18.375ZM14.75 1.31641L7.25 13.5664L3.625 7.31641C6.125 3.81641 10.125 1.44141 14.75 1.31641ZM1.25 15.0664C1.25 12.6914 1.875 10.4414 2.875 8.56641L10.125 21.3164H2.75C1.75 19.4414 1.25 17.3164 1.25 15.0664ZM13.875 28.8164C9.5 28.4414 5.75 26.0664 3.5 22.5664H17.625L13.875 28.8164ZM15.375 28.8164L23 16.3164L26.75 22.4414C24.25 26.1914 20.125 28.6914 15.375 28.8164ZM19.875 8.81641H27.25C28.25 10.6914 28.75 12.8164 28.75 15.0664C28.75 17.1914 28.25 19.3164 27.375 21.0664L19.875 8.81641Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="dark:text-white"> Customer Delight </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className=" shadow-icon  item-center relative flex justify-center rounded-full bg-white dark:bg-dark-200">
                  <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11 1.56641C12.2 0.766406 13.5 0.566406 14 0.566406C14.8 0.566406 15.6667 0.899739 16 1.06641C18 2.23308 22.5 4.86641 24.5 6.06641C26.5 7.26641 27.3333 9.23308 27.5 10.0664V19.0664C27.5 21.4664 26.1667 23.0664 25.5 23.5664C23.5 24.7331 19 27.3664 17 28.5664C15 29.7664 12.8333 29.3997 12 29.0664C9.33333 27.5664 3.7 24.3664 2.5 23.5664C1.3 22.7664 0.666667 20.5664 0.5 19.5664V10.5664C0.5 8.96641 1.83333 7.23308 2.5 6.56641C4.83333 5.23308 9.8 2.36641 11 1.56641Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M25.095 5.60483L17.072 0.901122C15.1751 -0.211833 12.8189 -0.211833 10.922 0.901122L2.90499 5.60483C1.11547 6.65921 0 8.58052 0 10.6248V19.5109C0 21.5552 1.11547 23.4765 2.90499 24.5309L10.922 29.2346C11.8705 29.7911 12.9323 30.0664 14 30.0664C15.0677 30.0664 16.1295 29.7852 17.078 29.2346L25.095 24.5309C26.8845 23.4824 28 21.5552 28 19.5109V10.6248C27.994 8.58052 26.8845 6.65921 25.095 5.60483ZM3.55518 6.67678L11.5722 1.97308C13.0695 1.09443 14.9246 1.09443 16.4218 1.97308L24.4389 6.67678C24.9638 6.98723 25.4171 7.38555 25.775 7.85417L14 14.3503L2.219 7.86003C2.58287 7.39141 3.03025 6.98723 3.55518 6.67678ZM3.55518 23.4531C2.14742 22.6272 1.27056 21.1159 1.27056 19.5109V10.6248C1.27056 10.0449 1.38389 9.47674 1.59864 8.94955L13.3617 15.434V28.7719C12.7414 28.6899 12.1329 28.4848 11.5722 28.1568L3.55518 23.4531ZM26.7235 19.5109C26.7235 21.1159 25.8466 22.6272 24.4389 23.4531L16.4218 28.1568C15.8611 28.4848 15.2527 28.6899 14.6323 28.7719V15.4281L26.3954 8.94369C26.6101 9.47088 26.7235 10.0391 26.7235 10.619V19.5109Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="dark:text-white"> Integrity </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon  item-center relative flex justify-center rounded-full bg-white dark:bg-dark-200">
                  <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.0006 3.06641C11.6007 1.06641 13.334 0.566406 14.0007 0.566406C15.6006 0.566406 17.0007 1.89974 17.5008 2.56641C19.8341 5.06641 24.9008 10.6664 26.5008 13.0664C28.1008 15.4664 27.1674 17.7331 26.5008 18.5664C24.0008 21.2331 18.5008 26.9664 16.5008 28.5664C14.5008 30.1664 12.6674 29.5664 12.0008 29.0664C9.16737 26.5664 3.10063 20.9664 1.50063 18.5664C-0.0993686 16.1664 0.833964 13.8997 1.50063 13.0664C3.6673 10.5664 8.40063 5.06641 10.0006 3.06641Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M0.0068501 16.3262C0.0068501 16.332 0.0068501 16.3379 0.0068501 16.3262V16.3262ZM27.9943 16.3027C27.8869 17.5742 27.3381 19.0273 26.3897 20.0234L17.335 28.6953C16.4641 29.5742 15.283 30.0664 14.0125 30.0664C12.742 30.0664 11.5549 29.5742 10.6781 28.6836L1.63527 20.0469C0.674921 19.0391 0.120184 17.5859 0.0068501 16.3086C-0.0587641 14.9727 0.346851 13.6133 1.22966 12.4824L10.4156 1.73047C11.3044 0.669922 12.6107 0.0664062 14.0065 0.0664062C15.4083 0.0664062 16.7146 0.675781 17.6034 1.73633L26.7536 12.4648C27.6483 13.6074 28.0539 14.9668 27.9943 16.3027ZM1.28931 15.6348L8.19073 14.5098L13.0521 1.45508C12.4079 1.64258 11.8353 2.01172 11.3999 2.52735L11.3939 2.53321L2.21984 13.2676C1.67106 13.9707 1.36089 14.7969 1.28931 15.6348ZM13.3742 19.3027L8.49494 15.7285L1.35492 16.8887C1.51598 17.7148 1.91563 18.5117 2.54194 19.1738L11.5728 27.7988C12.0739 28.3027 12.6942 28.6309 13.3742 28.7598V19.3027ZM18.5876 14.8437L14.0125 2.50977L9.4195 14.8379L14.0125 18.2012L18.5876 14.8437ZM26.6522 16.8887L19.5121 15.7227L14.6507 19.2969V28.7539C15.3307 28.625 15.9511 28.3027 16.4402 27.8047L25.489 19.1445C26.1034 18.5 26.4911 17.7148 26.6522 16.8887ZM26.7118 15.6348C26.6343 14.791 26.3241 13.9648 25.7634 13.2441L16.6251 2.53321C16.1897 2.01172 15.6111 1.63672 14.9669 1.45508L19.8104 14.5098L26.7118 15.6348ZM27.9943 16.3027C28.0002 16.291 28.0002 16.3613 27.9943 16.3027V16.3027Z"
                      fill="white"
                    />
                    <path
                      d="M0.0068501 16.3262C0.0068501 16.332 0.0068501 16.3379 0.0068501 16.3262V16.3262ZM27.9943 16.3027C27.8869 17.5742 27.3381 19.0273 26.3897 20.0234L17.335 28.6953C16.4641 29.5742 15.283 30.0664 14.0125 30.0664C12.742 30.0664 11.5549 29.5742 10.6781 28.6836L1.63527 20.0469C0.674921 19.0391 0.120184 17.5859 0.0068501 16.3086C-0.0587641 14.9727 0.346851 13.6133 1.22966 12.4824L10.4156 1.73047C11.3044 0.669922 12.6107 0.0664062 14.0065 0.0664062C15.4083 0.0664062 16.7146 0.675781 17.6034 1.73633L26.7536 12.4648C27.6483 13.6074 28.0539 14.9668 27.9943 16.3027ZM1.28931 15.6348L8.19073 14.5098L13.0521 1.45508C12.4079 1.64258 11.8353 2.01172 11.3999 2.52735L11.3939 2.53321L2.21984 13.2676C1.67106 13.9707 1.36089 14.7969 1.28931 15.6348ZM13.3742 19.3027L8.49494 15.7285L1.35492 16.8887C1.51598 17.7148 1.91563 18.5117 2.54194 19.1738L11.5728 27.7988C12.0739 28.3027 12.6942 28.6309 13.3742 28.7598V19.3027ZM18.5876 14.8437L14.0125 2.50977L9.4195 14.8379L14.0125 18.2012L18.5876 14.8437ZM26.6522 16.8887L19.5121 15.7227L14.6507 19.2969V28.7539C15.3307 28.625 15.9511 28.3027 16.4402 27.8047L25.489 19.1445C26.1034 18.5 26.4911 17.7148 26.6522 16.8887ZM26.7118 15.6348C26.6343 14.791 26.3241 13.9648 25.7634 13.2441L16.6251 2.53321C16.1897 2.01172 15.6111 1.63672 14.9669 1.45508L19.8104 14.5098L26.7118 15.6348ZM27.9943 16.3027C28.0002 16.291 28.0002 16.3613 27.9943 16.3027V16.3027Z"
                      fill="white"
                    />
                  </svg>
                </span>

                <span className="dark:text-white"> Transparency </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCoreValue