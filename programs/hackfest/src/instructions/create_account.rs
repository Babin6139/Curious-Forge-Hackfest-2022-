use anchor_lang::prelude::*;


pub fn create_account(ctx:Context<UserAccount>,name:String,phone_no:String)->Result<()>{
    let new_account=&mut ctx.accounts.user_account;
    new_account.name=name;
    new_account.phone_no=phone_no;

    Ok(())
}


#[derive(Accounts)]
pub struct UserAccount<'info>{
    #[account(init,payer=authority,space= 8+32+32+40)]
    pub user_account:Account<'info,UserData>,
    #[account(mut)]
    authority:Signer<'info>,
    system_program:Program<'info,System>
}

#[account]
pub struct UserData{
    pub name:String,
    pub phone_no:String
}