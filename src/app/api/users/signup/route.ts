import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password, phone_no } = reqBody;

    console.log(reqBody);

    // check if user already exists

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //  hash password

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    // const hashedPhone_no = await bcryptjs.hash(phone_no,salt)

    // new user

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone_no,
    });

    const savedUser = await newUser.save();

    console.log("save sucess", savedUser);

    return NextResponse.json({
      message: "User register successfull",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
