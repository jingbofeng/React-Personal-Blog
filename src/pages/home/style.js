import styled from 'styled-components';
import bannerimg from '../../statics/bannerimg.webp'

export const HomeWrapper = styled.div`
		overflow:hidden;
		width:960px;
		margin:0 auto;
`

export const HomeLeft = styled.div`
		float:left;
		width:625px;
		margin-left:15px;
		padding-top:30px;
		.bannerimg{
			background:url(${bannerimg});
			background-size:contain;
			width:625px;
			height:270px;
		}
`

export const HomeRight = styled.div`
		float:right;
		width:280px;
		margin-right:15px;
		padding-top:30px;
		height:400px;
`

export const BackTop = styled.div`
		position: fixed;
		right: 50px;
		bottom: 30px;
		width: 60px;
		height: 60px;
		line-height:60px;
		font-size:15px;
		text-align: center;
		border: 1px solid #ccc;
`

export const TopicWrapper = styled.div`
		padding: 20px 0 10px 0;
		overflow:hidden;
		margin-left:-10px;
		border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
        float:left;
		background:#f7f7f7;
		height:32px;
		width:100px;
		line-height:32px;
		margin-bottom:10px;
		margin-left:18px;
		font-size:14px;
		color:#000;
		padding-right:8px;
		border:1px solid #dcdcdc;
		border-radius:4px;
		.topicpic1{
			background:url(${bannerimg});
			background-size:contain;
			width:32px;
			height:32px;
			display:block;
			float:left;
			margin-right:8px;
		}
`

export const MoreItem = styled.a.attrs({
	href:'/'
})`
		font-size:14px;
		color:black;
		display:block;
		float:left;
		line-height:32px;
		margin-left:10px;
`

export const ListItem = styled.div`
		overflow:hidden;
		padding:20px 0;
		border-bottom: 1px solid #dcdcdc;
		.list-pic{
			display:block;
			width:150px;
			height:100px;
			float:right;
		}
`

export const ListInfo = styled.div`
		width:475px;
		float:left;
		.title{
			line-height:27px;
			font-size:18px;
			font-weight:bold;
			color:#333;
		}
		.page{
			line-height:24px;
			font-size:13px;
			color:#999;
		}
`

export const LoadMore = styled.div`
		width: 625px;
		height: 40px;
		line-height: 40px;
		margin:30px 0;
		background: #a5a5a5;
		text-align: center;
		border-radius: 20px;
		color: #fff;
		cursor:pointer;
`

export const RecommendWrapper = styled.div`
		margin:30px 0;
		width:280px;
`

export const RecommendItem = styled.div`
		margin:10px 0;
		width:280px;
		height: 50px;
		background: url(${(props) => props.imgUrl});
		background-size:contain;
`


export const WriterWrapper = styled.div`
		width: 278px;
		border: 1px solid #dcdcdc;
		border-redius: 3px;
		height: 300px;
		line-height: 300px;
		text-align: center;

`