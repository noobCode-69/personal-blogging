import React from "react";
import styled from "./logo.module.css";

function Logo() {
  return (
    <div className={styled["container"]}>
      <svg
        width="196"
        height="67"
        viewBox="0 0 196 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="logo">
          <path
            id="so_hell"
            d="M30.1563 33.7656H20.2344C20.1823 33.1536 19.9674 32.6263 19.5898 32.1836C19.2122 31.7409 18.724 31.4023 18.125 31.168C17.5391 30.9206 16.888 30.7969 16.1719 30.7969C15.2474 30.7969 14.4531 30.9661 13.7891 31.3047C13.125 31.6432 12.7995 32.125 12.8125 32.75C12.7995 33.1927 12.9883 33.6029 13.3789 33.9805C13.7826 34.3581 14.5573 34.651 15.7031 34.8594L21.7969 35.9531C24.8698 36.513 27.1549 37.457 28.6523 38.7852C30.1628 40.1003 30.9245 41.8646 30.9375 44.0781C30.9245 46.2135 30.2865 48.069 29.0234 49.6445C27.7734 51.207 26.0612 52.418 23.8867 53.2773C21.7253 54.1237 19.2578 54.5469 16.4844 54.5469C11.901 54.5469 8.3138 53.6094 5.72266 51.7344C3.14453 49.8594 1.70573 47.3854 1.40625 44.3125H12.1094C12.2526 45.263 12.7214 45.9987 13.5156 46.5195C14.3229 47.0273 15.3385 47.2812 16.5625 47.2812C17.5521 47.2812 18.3659 47.112 19.0039 46.7734C19.6549 46.4349 19.987 45.9531 20 45.3281C19.987 44.7552 19.7005 44.2995 19.1406 43.9609C18.5938 43.6224 17.7344 43.349 16.5625 43.1406L11.25 42.2031C8.1901 41.6693 5.89844 40.6536 4.375 39.1562C2.85156 37.6589 2.09635 35.7318 2.10938 33.375C2.09635 31.2917 2.64323 29.5273 3.75 28.082C4.86979 26.6237 6.46484 25.5169 8.53516 24.7617C10.6185 23.9935 13.0859 23.6094 15.9375 23.6094C20.2734 23.6094 23.6914 24.5078 26.1914 26.3047C28.7044 28.1016 30.026 30.5885 30.1563 33.7656ZM49.5215 54.5469C46.2663 54.5469 43.4798 53.9023 41.1621 52.6133C38.8444 51.3112 37.0671 49.5013 35.8301 47.1836C34.5931 44.8529 33.9746 42.151 33.9746 39.0781C33.9746 36.0052 34.5931 33.3099 35.8301 30.9922C37.0671 28.6615 38.8444 26.8516 41.1621 25.5625C43.4798 24.2604 46.2663 23.6094 49.5215 23.6094C52.7767 23.6094 55.5632 24.2604 57.8809 25.5625C60.1986 26.8516 61.9759 28.6615 63.2129 30.9922C64.4499 33.3099 65.0684 36.0052 65.0684 39.0781C65.0684 42.151 64.4499 44.8529 63.2129 47.1836C61.9759 49.5013 60.1986 51.3112 57.8809 52.6133C55.5632 53.9023 52.7767 54.5469 49.5215 54.5469ZM49.5996 46.5781C50.5111 46.5781 51.2988 46.2721 51.9629 45.6602C52.627 45.0482 53.1413 44.1758 53.5059 43.043C53.8704 41.9102 54.0527 40.5625 54.0527 39C54.0527 37.4245 53.8704 36.0768 53.5059 34.957C53.1413 33.8242 52.627 32.9518 51.9629 32.3398C51.2988 31.7279 50.5111 31.4219 49.5996 31.4219C48.6361 31.4219 47.8092 31.7279 47.1191 32.3398C46.429 32.9518 45.9017 33.8242 45.5371 34.957C45.1725 36.0768 44.9902 37.4245 44.9902 39C44.9902 40.5625 45.1725 41.9102 45.5371 43.043C45.9017 44.1758 46.429 45.0482 47.1191 45.6602C47.8092 46.2721 48.6361 46.5781 49.5996 46.5781ZM93.8184 54V61.6563H66.709V54H93.8184ZM107.349 37.125V54H96.5674V14H106.958V29.7031H107.271C107.948 27.7891 109.074 26.2982 110.649 25.2305C112.225 24.1497 114.119 23.6094 116.333 23.6094C118.455 23.6094 120.298 24.0911 121.86 25.0547C123.436 26.0182 124.653 27.3464 125.513 29.0391C126.385 30.7318 126.815 32.6719 126.802 34.8594V54H116.021V37.125C116.034 35.6406 115.662 34.4753 114.907 33.6289C114.165 32.7826 113.104 32.3594 111.724 32.3594C110.851 32.3594 110.083 32.5547 109.419 32.9453C108.768 33.3229 108.26 33.8698 107.896 34.5859C107.544 35.2891 107.362 36.1354 107.349 37.125ZM146.499 54.5469C143.296 54.5469 140.535 53.9349 138.218 52.7109C135.913 51.474 134.136 49.7031 132.886 47.3984C131.649 45.0807 131.03 42.3073 131.03 39.0781C131.03 35.9792 131.655 33.2708 132.905 30.9531C134.155 28.6354 135.92 26.832 138.198 25.543C140.477 24.2539 143.166 23.6094 146.265 23.6094C148.53 23.6094 150.581 23.9609 152.417 24.6641C154.253 25.3672 155.822 26.3893 157.124 27.7305C158.426 29.0586 159.429 30.6732 160.132 32.5742C160.835 34.4753 161.187 36.6172 161.187 39V41.5H134.39V35.5625H151.265C151.252 34.7031 151.03 33.9479 150.601 33.2969C150.184 32.6328 149.618 32.1185 148.901 31.7539C148.198 31.3763 147.397 31.1875 146.499 31.1875C145.627 31.1875 144.826 31.3763 144.097 31.7539C143.368 32.1185 142.782 32.6263 142.339 33.2773C141.909 33.9284 141.681 34.6901 141.655 35.5625V41.9688C141.655 42.9323 141.857 43.7917 142.261 44.5469C142.664 45.3021 143.244 45.8945 143.999 46.3242C144.754 46.7539 145.666 46.9688 146.733 46.9688C147.476 46.9688 148.153 46.8646 148.765 46.6562C149.39 46.4479 149.924 46.1484 150.366 45.7578C150.809 45.3542 151.134 44.8724 151.343 44.3125H161.187C160.848 46.3958 160.047 48.2057 158.784 49.7422C157.521 51.2656 155.848 52.4505 153.765 53.2969C151.694 54.1302 149.272 54.5469 146.499 54.5469ZM176.367 14V54H165.586V14H176.367ZM192.642 14V54H181.86V14H192.642Z"
            fill="#4433FF"
          />
        </g>
      </svg>
    </div>
  );
}

export default Logo;