import styled from 'styled-components';
import logoPic from '../../statics/logo.png';


export const HeaderWrapper = styled.div`
		position:relative;
		width:100%;
		height:58px;
		padding:0px 30px;
		box-sizing:border-box;
		border-bottom: 1px solid #f0f0f0;	
` 

export const Logo = styled.a.attrs({
	href:'/'
})`
		position:absolute;
		width:100px;
		height:56px;
		background:red;
		display:block;
		background: url(${logoPic});
		background-size:contain;
`

export const Nav = styled.div`
		width:960px;
		height:58px;
		margin:0 auto;
`

export const NavItem = styled.div`
		padding:0 20px;
		line-height:56px;
		font-size:17px;
		color:#333333;
		&.left{
			float:left;
		}
		&.right{
			float:right;
			color:#969696;
		}
		&.active{
			color:#ea6f5a;
		}

`

export const SearchWrapper = styled.div`
		position:relative;
		float:left;
		.iconfont{
			position:absolute;
			right:5px;
			bottom:5px;
			width:30px;
			line-height:30px;
			border-radius:15px;
			text-align:center;
			&.focused{
				background:#777;
				color:#fff;
			}
		}
		.slide-enter{
			transition: all .2s ease-out;
		}
		.slide-enter-active{
			width:240px;
		}
		.slide-exit{
			transition: all .2s ease-out;
		}
		.slide-exit-active{
			width:160px;
		}

`

export const NavSearch = styled.input.attrs({
	placeholder:'搜索'
})`
		width:160px;
		height:38px;
		border:none;
		outline:none;
		margin-top:9px;
		margin-left:20px;
		font-size:14px;
		padding:0 40px 0 20px;
		border-radius:19px;
		background:#eee;
		box-sizing:border-box;
		&::placeholder{
			color:#999;
		}
		&.focused{
			width:240px;
		}
`
export const SearchInfo = styled.div`
		position: absolute;
		background: #fff;
		left:0;
		top:56px;
		width:240px;
		padding:0 20px;
		box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`

export const SearchInfoTitle = styled.div`
		margin-top:20px;
		margin-bottom:15px;
		color:#969696;
		font-size:14px;
		line-height:20px;

`

export const SearchInfoSwitch = styled.span`
		float:right;
		font-size:13px;
`
export const SearchInfoItem = styled.a`
		line-height:20px;
		margin-left:10px;
		margin-bottom:15px;
		padding:0 5px;
		font-size:12px;
		border:1px solid #ddd;
		color:#787878;
		border-radius: 2px;
		display:block;
		float:left;
`
export const SearchInfoList = styled.div`
		overflow: hidden;
`

export const Addition = styled.div`
		position: absolute;
		right:0;
		top:0;
		height:56px;
`

export const Button = styled.div`
		float:right;
		line-height:38px;
		border-radius:19px;
		margin-top:9px;
		border:1px solid #ea6f5a;
		margin-right:40px;
		padding:0 20px;
		font-size:14px;
		&.reg{
			color:#ea6f5a;
			background:#fff;
		}
		&.writting{
			color:#fff;
			background:#ea6f5a;
		}
`