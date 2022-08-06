use anchor_lang::prelude::*;


pub fn create_account(ctx:Context<UserAccount>,name:String,phone_no:String)->Result<()>{
    let new_account=&mut ctx.accounts.user_account;
    new_account.name=name;
    new_account.phone_no=phone_no;
    new_account.authority=ctx.accounts.authority.key();
    Ok(())
}


#[derive(Accounts)]
pub struct UserAccount<'info>{
    #[account(
        init,
        payer=authority,
        space=8 + 40 + 40 +32+32,
        seeds=[authority.key.as_ref(),b"_profile"],
        bump)]
    pub user_account:Account<'info,UserData>,
    #[account(mut)]
    authority:Signer<'info>,
    system_program:Program<'info,System>
}

#[account]
pub struct UserData{
    pub name:String,
    pub phone_no:String,
    pub land_count:u32,
    pub authority:Pubkey
}