import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Container from '../../components/Container'
import Button from '../../components/Button'
import { blogPosts, slugify } from '../../components/data/Blogdata'
import SEO from '../../components/SEO'

function renderBlock(block, idx) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={idx} className="font-semibold text-[35px] max-[540px]:text-[26px] leading-[1.3] mb-[20px] mt-[20px]">
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 key={idx} className="font-semibold text-[20px] leading-[1.4] mb-[12px] mt-[24px]">
          {block.text}
        </h3>
      )
    case 'h4':
      return (
        <h4 key={idx} className="font-semibold text-[18px] leading-[1.4] mb-[10px] mt-[20px]">
          {block.text}
        </h4>
      )
    case 'ul':
      return (
        <ul key={idx} className="list-disc pl-[22px] mb-[16px] space-y-[8px] text-[16px] leading-[26px]">
          {block.items.map((item, i) =>
            typeof item === 'string' ? (
              <li key={i}>{item}</li>
            ) : (
              <li key={i}>
                <span className="font-semibold">{item.bold}</span>
                {item.text ? `: ${item.text}` : null}
              </li>
            )
          )}
        </ul>
      )
    case 'ol':
      return (
        <ol key={idx} className="list-decimal pl-[22px] mb-[16px] space-y-[8px] text-[16px] leading-[26px]">
          {block.items.map((item, i) =>
            typeof item === 'string' ? (
              <li key={i}>{item}</li>
            ) : (
              <li key={i}>
                <span className="font-semibold">{item.bold}</span>
                {item.text ? `: ${item.text}` : null}
              </li>
            )
          )}
        </ol>
      )
    case 'list-plain':
      return (
        <div key={idx} className="mb-[16px] space-y-[10px] text-[16px] leading-[26px]">
          {block.items.map((item, i) =>
            typeof item === 'string' ? (
              <p key={i} className="font-semibold">{item}</p>
            ) : (
              <p key={i}>
                <span className="font-semibold">{item.bold}</span>
                {item.text ? `: ${item.text}` : null}
              </p>
            )
          )}
        </div>
      )
    case 'quote':
      return (
        <blockquote key={idx} className="border-l-[3px] border-white/30 pl-[16px] italic text-[16px] leading-[26px] mb-[16px]">
          {block.text}
        </blockquote>
      )
    case 'p':
    default:
      return (
        <p key={idx} className="text-[16px] leading-[26px] mb-[16px]">
          {block.text}
        </p>
      )
  }
}

export default function BlogDetail() {
  const { slug } = useParams()

  const post = blogPosts.find((p) => slugify(p.title) === slug)

  const sidebarPosts = blogPosts.filter((p) => slugify(p.title) !== slug).slice(0, 2)

  if (!post) {
    return (
      <section className="relative">
        <SEO
          title="Blog Post Not Found – CartPlus"
          description="The blog post you're looking for doesn't exist or may have been moved. Browse our full library of Shopify growth and conversion tips."
        />
        <Container className="relative z-10 py-[80px] text-white text-center">
          <h1 className="font-bold text-[40px] mb-4">Blog post not found</h1>
          <Link to="/blog" className="text-[#512B6C] underline">
            Back to Blog
          </Link>
        </Container>
      </section>
    )
  }

  return (
    <section className="relative">
       <SEO
        title={`${post.title} – CartPlus Blog`}
        description={post.desc}
        url={`https://hubsyntax.com/blog/${slugify(post.title)}`}
      />
      <Container className="relative z-10 py-[80px] max-[540px]:py-[50px] text-white">
        <div className='mx-auto max-w-[1000px] max-[540px]:mb-[40px] mb-[80px]'>
          <h1 className="font-bold text-center text-[50px] max-[540px]:text-[34px] max-[540px]:leading-[40px] leading-[70px] mb-[10px]">
            {post.title}
          </h1>
          <p className="text-[16px] leading-[26px] text-center">
            {post.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
          {/* Main Content */}
          <div>
            {post.img && (
              <img
                src={post.img}
                alt={post.title}
                className="w-full rounded-xl mb-[30px]"
              />
            )}
            {post.content.map((block, idx) => renderBlock(block, idx))}
          </div>

          {/* Sidebar */}
          <div className="space-y-10 sticky top-[100px]">
            {/* CTA Card */}
            <div className="bg-[#512B6C] rounded-[10px] p-[30px] mb-[20px]">
              <h3 className="text-[20px] font-[600] mb-[15px]">
                Increase Conversions With a Better Cart Experience
              </h3>
              <p className="mb-[15px] text-[16px]">
                Install the #1 rated cart drawer app for Shopify and start increasing conversions,
                upsells, and average order value.
              </p>
              <div className="flex">
                <Button
                  variant="pill"
                  className="mx-auto"
                  icon="https://hubsyntax.com/cart-images/buttonIcon.png"
                >
                  Start Free Trial
                </Button>
              </div>
            </div>

            {/* Latest Articles */}
            <div className="block md:flex justify-between gap-[20px] lg:block">
              {sidebarPosts.map((sPost) => (
                <div key={sPost.id} className="mb-[20px]">
                  <h3 className="text-[30px] font-[600] leading-[40px] mb-[10px]">
                    Latest Articles
                  </h3>
                  <Link to={`/blog/${slugify(sPost.title)}`}>
                    <img
                      src={sPost.img}
                      alt={sPost.title}
                      className="mb-[15px] w-full rounded-lg"
                    />
                    <h3 className="text-[20px] font-[600] mb-[5px] hover:text-[#a970d4] transition-colors">
                      {sPost.title}
                    </h3>
                  </Link>
                  <p className="text-[14px]">5 min read</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}