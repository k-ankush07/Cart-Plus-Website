import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import { blogPosts, slugify } from '../../components/data/Blogdata'

export default function Blog() {

  return (
    <section>
      <Container className="relative z-10 py-[40px] max-[540px]:py-[25px]">
        <h2 className="font-bold text-[30px] leading-[40px] mb-[20px] text-white">Blog</h2>

        <div className="grid grid-cols-3 gap-[30px] lg:gap-[50px] max-[640px]:grid-cols-1 max-[1024px]:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              to={`/blog/${slugify(post.title)}`}
              key={post.id}
              className="group/card bg-[#1D1E20] rounded-xl overflow-hidden flex flex-col border border-[#FFFFFF33] transition-colors hover:border-[#512B6C]"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-[250px] object-cover object-left"
              />
              <div className="p-[20px] flex flex-col flex-1">
                <p className="text-[14px] mb-[20px]">{post.date}</p>
                <h4 className="text-white font-semibold text-[20px] leading-[1.4] mb-1">
                  {post.title}
                </h4>
                <p className="text-[16px] leading-[1.5] mb-4 flex-1">
                  {post.desc?.split(' ').slice(0, 15).join(' ')}
                  {post.desc?.split(' ').length > 15 ? '...' : ''}
                </p>
                <span className="group flex items-center gap-[10px] text-[18px] font-medium w-fit cursor-pointer">
                  Read more
                  <img
                    src="https://hubsyntax.com/cart-images/Vector (9).svg"
                    alt=""
                    className="w-[10px] h-[10px] transition-transform duration-300 group-hover/card:rotate-45"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}