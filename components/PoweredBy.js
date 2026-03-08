import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Partnered with</span>
      <a
        href='https://geonix.com/?partner_link=hr7qyBUuqy'
        className='underline justify-start'>
        Geonix {siteConfig('VERSION')}
      </a>
      .
    </div>
  )
}
