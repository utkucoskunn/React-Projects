import React from "react";
import Common from "./common/Common";
import {blog} from "../data";
function Blog() {
    return (
        <>
            <section className='blog'>
                <div className='container'>
                    <div className='itemContent'>
                        <Common title='blog'/>
                        <div className='box'>
                            {blog.map((val) => {
                                return (
                                    <>
                                        <div className='img'>
                                            <img src={val.cover} alt=''/>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;